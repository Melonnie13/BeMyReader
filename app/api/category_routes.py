from flask import Blueprint, jsonify, session, request
from app.models import Category, db
from flask_login import current_user, login_required

category_routes = Blueprint('categories', __name__)
