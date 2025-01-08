from flask import Blueprint, request, jsonify
from database import db
from models import Report
from schemas import ReportSchema

report_bp = Blueprint('reports', __name__)
report_schema = ReportSchema()
reports_schema = ReportSchema(many=True)

@report_bp.route('/', methods=['GET'])
def get_reports():
    """Fetch all reports."""
    reports = Report.query.all()
    return reports_schema.jsonify(reports), 200

@report_bp.route('/', methods=['POST'])
def create_report():
    """Create a new report."""
    data = request.json
    required_fields = ['user_id', 'report_content']
    missing_fields = [field for field in required_fields if field not in data]

    if missing_fields:
        return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 400

    try:
        new_report = report_schema.load(data)
        db.session.add(new_report)
        db.session.commit()
        return report_schema.jsonify(new_report), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@report_bp.route('/<int:id>', methods=['DELETE'])
def delete_report(id):
    """Delete a report."""
    report = Report.query.get(id)
    if not report:
        return jsonify({"error": "Report not found"}), 404

    try:
        db.session.delete(report)
        db.session.commit()
        return jsonify({"message": "Report deleted"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
