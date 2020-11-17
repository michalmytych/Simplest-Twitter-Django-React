from __future__ import print_function
import random
import sys


def generate_secret_key():
    """
        Pseudo-random django secret key generator.
    """
    chars = 'abcdefghijklmnopqrstuvwxyz' \
        'ABCDEFGHIJKLMNOPQRSTUVXYZ' \
        '0123456789' \
        '#()^[]-_*%&=+/'
    SECRET_KEY = ''.join([random.SystemRandom().choice(chars) for i in range(50)])

    return SECRET_KEY


def create_secrets():
    """
        Creates secrets.py script with generated DJANGO_SECRET_KEY.
    """

    KEY = generate_secret_key()
    code = f"DJANGO_SECRET_KEY = '{KEY}'"
    with open('secrets.py', 'w') as f:
        f.write(code)

        print('From keygen.py : Django secret key generated successfully.')

create_secrets()