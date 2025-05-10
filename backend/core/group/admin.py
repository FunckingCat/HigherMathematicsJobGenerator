from django.contrib import admin
from group.models import Group
# Register your models here.
class GroupAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'created_at')
    list_display_links = ('id','name')
    search_fields = ('id','name',)



admin.site.register(Group, GroupAdmin)