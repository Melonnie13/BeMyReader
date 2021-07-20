from app.models import Recording
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, ValidationError

class RecordingForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
    audio = StringField('audio', validators=[DataRequired()])
