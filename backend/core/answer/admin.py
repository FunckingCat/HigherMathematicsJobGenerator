from django.contrib import admin
from answer.models import Answer
# Register your models here.
class AnswerAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'created_at')
    list_display_links = ('id','name')
    search_fields = ('id','name')



admin.site.register(Answer, AnswerAdmin)