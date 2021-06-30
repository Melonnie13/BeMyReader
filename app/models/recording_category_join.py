from .db import db

recordings_categories = db.Table(
    'recordings_categories',
    db.Column(
        'recording_id',
        db.Integer,
        db.ForeignKey('recordings.id'),
        primary_key=True
    ),

    db.Column(
        'category_id',
        db.Integer,
        db.ForeignKey('categories.id'),
        primary_key=True
    )
)
