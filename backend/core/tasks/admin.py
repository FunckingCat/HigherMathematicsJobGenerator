from django.contrib import admin
from tasks.models import Task
# Register your models here.
class TaskAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'view', 'data_task')
    list_display_links = ('id','title')
    search_fields = ('id','view')
    list_editable = ('data_task' ,)
    list_filter = ('data_task',)



admin.site.register(Task, TaskAdmin)