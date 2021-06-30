from flask import Blueprint, jsonify, session, request
from app.models import Recording, db
from flask_login import current_user, login_required

recording_routes = Blueprint('recordings', __name__)
