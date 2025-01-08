from flask import Blueprint, request, jsonify
from database import db
from models import User
from schemas import UserSchema

user_bp = Blueprint('users', __name__)
user_schema = UserSchema()
users_schema = UserSchema(many=True)

@user_bp.route('/', methods=['GET'])
def get_users():
    """Fetch all users."""
    users = User.query.all()
    return users_schema.jsonify(users), 200

@user_bp.route('/', methods=['POST'])
def create_user():
    """Create a new user."""
    data = request.json
    required_fields = ['name', 'email', 'password', 'dbirth', 'address', 'pnumber']
    missing_fields = [field for field in required_fields if field not in data]

    if missing_fields:
        return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 400

    try:
        new_user = user_schema.load(data)
        db.session.add(new_user)
        db.session.commit()
        return user_schema.jsonify(new_user), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@user_bp.route('/<int:id>', methods=['PUT'])
def update_user(id):
    """Update user details."""
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.json
    user.name = data.get('name', user.name)
    user.email = data.get('email', user.email)
    user.password = data.get('password', user.password)
    user.dbirth = data.get('dbirth', user.dbirth)
    user.address = data.get('address', user.address)
    user.pnumber = data.get('pnumber', user.pnumber)

    try:
        db.session.commit()
        return user_schema.jsonify(user), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@user_bp.route('/<int:id>', methods=['DELETE'])
def delete_user(id):
    """Delete a user."""
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    try:
        db.session.delete(user)
        db.session.commit()
        return jsonify({"message": "User deleted"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
