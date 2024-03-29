from app.models import db, Recording
from faker import Faker

faker = Faker()

def seed_recordings():
    recording1 = Recording(
        title='Diamond Dog Food',
        description='Reading of diamond dog food',
        audio=faker.binary(length=1048576),
        user_id=1,
        category_id=3
    )
    recording2 = Recording(
        title='PineSol',
        description='Reading of PineSol ingredients',
        audio=faker.binary(length=1048576),
        user_id=2,
        category_id=1
    )
    recording3 = Recording(
        title='Houston Chronicle',
        description='Reading of Houston Chronicle Comic section',
        audio=faker.binary(length=1048576),
        user_id=3,
        category_id=2
    )

    db.session.add(recording1)
    db.session.add(recording2)
    db.session.add(recording3)

    db.session.commit()


def undo_recordings():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
