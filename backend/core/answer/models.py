from django.db import models


# Create your models here.
class Answer(models.Model):

    created_at = models.DateTimeField(verbose_name='время создания', auto_now_add = True)
    update_at = models.DateTimeField(verbose_name='время обновления', auto_now = True)
    name = models.TextField(verbose_name='Ответ')
    

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Ответ'
        verbose_name_plural = 'Ответы'
        ordering = ['id', 'name']
