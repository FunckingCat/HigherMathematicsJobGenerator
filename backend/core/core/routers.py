from rest_framework import routers
from tasks.views import TaskViewSet
from authentication.views import UserViewSet
from answer.views import AnswerViewSet
from generatedTask.views import GeneratedTaskViewSet
from group.views import GroupViewSet
from templates.views import TemplatesViewSet
from userTaskStatus.views import TaskStatusViewSet


router = routers.DefaultRouter()

router.register(r'task',  TaskViewSet)
router.register(r'auth',  UserViewSet)
router.register(r'answer',  AnswerViewSet)
router.register(r'generated',  GeneratedTaskViewSet)
router.register(r'group',  GroupViewSet)
router.register(r'tempates',  TemplatesViewSet)
router.register(r'status-task',  TaskStatusViewSet)






