from flask import Blueprint, jsonify, session, request
from app.models import Favorite, db
from flask_login import current_user, login_required

favorite_routes = Blueprint('favorites', __name__)
