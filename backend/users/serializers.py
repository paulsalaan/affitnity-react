from rest_framework.serializers import ModelSerializer
from .models import Profile
from django.contrib.auth.models import User

# user serializer
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email','first_name','last_name')


# profile serializer
class ProfileSerializer(ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Profile
        fields = ('id', 'user', 'birth_date', 'gender', 'weight', 'height', 'bmi', 'body_type')

