from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','password','email','full_name','group_id','task_status','answers', 'generated_tasks', 'is_active']
        extra_kwargs = {
            'password': {'write_only': True}
        } # скрыть пароль

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        instance.is_active = True

        if password is not None:
            instance.set_password(password)
        instance.save()

        return instance    