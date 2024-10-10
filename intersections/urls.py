from rest_framework.routers import DefaultRouter
from .views import IntersectionViewSet

router = DefaultRouter()
router.register(r'intersections', IntersectionViewSet, basename='intersection')

urlpatterns = router.urls
