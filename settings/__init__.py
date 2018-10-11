from .base import *

try:

    from .local import *
    print("done")
except:
    from .production import *
    print("fail")
    pass
