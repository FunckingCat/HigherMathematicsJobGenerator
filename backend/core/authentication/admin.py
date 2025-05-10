from django.contrib import admin
from authentication.models import User
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('id','email', 'full_name', 'password',)
    list_display_links = ('id','email',)
    search_fields = ('id', 'email','full_name',)

admin.site.register(User, UserAdmin)