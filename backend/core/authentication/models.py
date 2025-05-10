from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, Permission
from group.models import Group
from answer.models import Answer
from generatedTask.models import GeneratedTask
from userTaskStatus.models import TaskStatus


from authentication.managers import UserManager

# Create your models here.
class User(AbstractBaseUser, PermissionsMixin):

    ROLE_CHOICES = [
        ('student', 'Студент'),
        ('teacher', 'Преподаватель'),
        ('admin', 'Администратор'),
    ]

    email = models.EmailField(verbose_name='Почта', max_length=255, unique=True)
    full_name = models.CharField(verbose_name='Имя', max_length=255)
    group_id = models.ManyToManyField(Group, verbose_name='Группа', related_name='custom_user_groups', blank=True)
    task_status = models.ManyToManyField(TaskStatus, verbose_name='Статус задания', related_name='TaskStatus', blank=True)
    answers = models.ManyToManyField(Answer, verbose_name='Ответы', related_name='Answers', blank=True)
    generated_tasks = models.ManyToManyField(GeneratedTask, verbose_name='Варианты', related_name='GeneratedTasks', blank=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')

    groups = models.ManyToManyField(
        Group,
        verbose_name='Группы',
        related_name='auth_user_groups',  # Уникальное имя обратной связи
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name='Права пользователя',
        related_name='auth_user_permissions',  # Уникальное имя обратной связи
        blank=True,
    )

    is_active= models.BooleanField(verbose_name='активный пользователь', default=False)
    is_staff= models.BooleanField(verbose_name='персонал', default=False)
    is_superuser= models.BooleanField(verbose_name='админ', default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name',]

    objects = UserManager()

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ['id', 'email']


    