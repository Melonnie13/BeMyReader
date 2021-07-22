from app.models import Recording
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, ValidationError

class RecordingForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    category_id = IntegerField('category_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    audio = StringField('audio', validators=[DataRequired()])
