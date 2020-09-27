from flask import Flask, jsonify, request
import psycopg2
import psycopg2.extras

app = Flask(__name__)

conn = psycopg2.connect("dbname = python-psycopg2 user=sammaus", cursor_factory=psycopg2.extras.RealDictCursor)

# OWNER ROUTES
@app.route('/api/owners', methods = ['GET', 'POST'])
def owners():
    if request.method == 'GET':
        cur = conn.cursor()
        cur.execute("""SELECT COUNT(pets.owner_id) AS pets, owner.name, owner.id 
        FROM pets RIGHT JOIN owner ON pets.owner_id = owner.id GROUP BY owner.id;""")
        response = cur.fetchall()
        return jsonify(response)
    else:
        cur = conn.cursor()
        ownerName = request.json.get("name")
        cur.execute("INSERT INTO owner (name) VALUES (%s);", [ownerName])
        conn.commit()
        return "success", 201

@app.route('/api/owners/<id>', methods = ['DELETE'])
def delete_owner(id):
    cur = conn.cursor()
    cur.execute("DELETE FROM owner WHERE id = %s", [id])
    conn.commit()
    return "deleted", 200

@app.route('/api/owners/<id>', methods = ['PUT'])
def update_owner(id):
    cur = conn.cursor()
    new_name = request.json.get("name")
    cur.execute("UPDATE owner SET name = %s WHERE id = %s;", [new_name, id])
    conn.commit()
    return "updated", 201

# PETS ROUTES
@app.route('/api/pets', methods = ['GET', 'POST'])
def petsRoute():
    if request.method == 'GET':
        cur = conn.cursor()
        cur.execute("""SELECT pets.id, owner.name AS owner, owner.id AS owner_id, pets.name, pets.breed, pets.color, pets.is_checked_in 
        FROM pets JOIN owner ON pets.owner_id = owner.id;""")
        response = cur.fetchall()
        return jsonify(response)
    else:
        cur = conn.cursor()
        pet_name = request.json.get("name")
        pet_color = request.json.get("color")
        pet_breed = request.json.get("breed")
        pet_owner_id = request.json.get("owner")
        checked_in = request.json.get("isCheckedIn")
        cur.execute("INSERT INTO pets (name, color, breed, owner_id, is_checked_in) VALUES (%s, %s, %s, %s, %s);", [pet_name, pet_color, pet_breed, pet_owner_id, checked_in])
        conn.commit()
        return "success", 201

@app.route('/api/pets/<id>', methods = ['DELETE'])
def deletePet(id):
    cur = conn.cursor()
    cur.execute("DELETE FROM pets WHERE id = %s", [id])
    conn.commit()
    return "deleted", 201

@app.route('/api/pets', methods = ['PUT'])
def checkInPet():
    cur = conn.cursor()
    date = request.json.get("is_checked_in")
    pet_id = request.json.get("id")
    cur.execute("UPDATE pets SET is_checked_in = %s WHERE id = %s;", [date, pet_id])
    conn.commit()
    return "updated", 201

app.run(host='localhost', port=5000)