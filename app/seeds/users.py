from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demoUser = User(
        username='demoUser', email='demoUser@bmr.org', vision_impaired=True, password='bmrpassword')
    bmrUser = User(
        username='bmrUser', email='bmrUser@bmr.org', vision_impaired=False, password='bmrpassword')
    mel = User(
        username='mel', email='mel@bmr.org', vision_impaired=False, password='bmrpassword')

    db.session.add(demoUser)
    db.session.add(bmrUser)
    db.session.add(mel)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
