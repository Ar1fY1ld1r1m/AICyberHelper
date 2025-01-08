from flask import Flask, jsonify
from flask_cors import CORS
from database import db, ma
from routes.users import user_bp
from routes.reports import report_bp
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:test@localhost/aicyberhelper'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
ma.init_app(app)

app.register_blueprint(user_bp, url_prefix='/api/users')
app.register_blueprint(report_bp, url_prefix='/api/reports')

with app.app_context():
    db.create_all()
    logger.info("Database tables created successfully.")

@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to AI Cyber Helper Backend API!",
        "status": "running",
        "endpoints": {
            "users": "/api/users",
            "reports": "/api/reports"
        }
    }), 200

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not Found", "message": "The requested resource could not be found."}), 404

@app.errorhandler(500)
def server_error(error):
    return jsonify({"error": "Server Error", "message": "An unexpected error occurred."}), 500

if __name__ == "__main__":
    app.run(debug=True)
