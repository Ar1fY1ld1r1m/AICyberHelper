from database import ma
from models import User, Report

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True

class ReportSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Report
        load_instance = True
