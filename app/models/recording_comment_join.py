from .db import db

recordings_comments = db.Table(
    'recordings_comments',
    db.Column(
        'recording_id',
        db.Integer,
        db.ForeignKey('recordings.id'),
        primary_key=True
    ),

    db.Column(
        'comment_id',
        db.Integer,
        db.ForeignKey('comments.id'),
        primary_key=True
    )
)
