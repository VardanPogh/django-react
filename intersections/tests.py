# intersections/tests.py

from django.test import TestCase
from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse
from .models import Intersection


# Model Tests
class IntersectionModelTests(TestCase):

    def setUp(self):
        Intersection.objects.create(name="Main St & 1st Ave", location="Downtown", streets="Main St, 1st Ave")

    def test_intersection_creation(self):
        intersection = Intersection.objects.get(name="Main St & 1st Ave")
        self.assertEqual(intersection.location, "Downtown")
        self.assertEqual(intersection.streets, "Main St, 1st Ave")

    def test_intersection_string_representation(self):
        intersection = Intersection.objects.get(name="Main St & 1st Ave")
        self.assertEqual(str(intersection), "Main St & 1st Ave")


# API Tests
class IntersectionAPITests(APITestCase):

    def setUp(self):
        self.intersection = Intersection.objects.create(
            name="Main St & 1st Ave", location="Downtown", streets="Main St, 1st Ave"
        )
        self.url = reverse('intersection-detail', args=[self.intersection.id])  # Ensure this matches your URL config

    def test_get_intersection(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], "Main St & 1st Ave")

    def test_create_intersection(self):
        data = {
            "name": "2nd Ave & 3rd St",
            "location": "Uptown",
            "streets": "2nd Ave, 3rd St"
        }
        response = self.client.post(reverse('intersection-list'), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Intersection.objects.count(), 2)

    def test_update_intersection(self):
        data = {
            "name": "Main St & 1st Ave",
            "location": "Downtown Updated",
            "streets": "Main St, 1st Ave"
        }
        response = self.client.put(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.intersection.refresh_from_db()
        self.assertEqual(self.intersection.location, "Downtown Updated")

    def test_delete_intersection(self):
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Intersection.objects.count(), 0)
