from django.db import models

class Intersection(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    streets = models.TextField()

    def __str__(self):
        return self.name
