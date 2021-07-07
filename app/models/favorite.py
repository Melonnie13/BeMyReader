from .db import db
from sqlalchemy import func
from .favorites_recordings_join import favorites_recordings

class Favorite(db.Model):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(25))
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    recordings = db.relationship('Recording', secondary=favorites_recordings, back_populates='favorites')
    users = db.relationship('User', back_populates='favorites')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'recording_id': [recording.id for recording in self.recordings],
            'username': self.users.username,
            'user_id': self.users.id,
            'title': [recording.title for recording in self.recordings]
        }
