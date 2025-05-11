from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, full_name, password = None):
        user = self.model(
            email = self.normalize_email(email),
            full_name = full_name,
        )

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, full_name, password):
        user = self.create_user(
            email = email,
            full_name = full_name,
            password = password,
        )

        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save()

        return user