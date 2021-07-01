from app.models import db, Comment

def seed_comments():
    comment1 = Comment(
        body='Soothing voice, easy to understand',
        user_id=1,
        recording_id=1
    )
    comment2 = Comment(
        body='Difficult to understand',
        user_id=2,
        recording_id=2
    )
    comment3 = Comment(
        body='Great work, thank you!',
        user_id=3,
        recording_id=3
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
