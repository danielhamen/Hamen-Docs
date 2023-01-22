import string
import random

def revision_id_generator():
    return "".join(random.choices(list(string.ascii_lowercase + (string.digits * 2)), k=12))

if __name__ == "__main__":
    print(
        revision_id_generator()
    )