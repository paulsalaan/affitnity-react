from django.contrib import admin
from .models import Profile

# Register your models here.
# class ProfileAdmin(admin.ModelAdmin):
    # list_display = ('user, birth_date', 'gender', 'weight', 'height', 'bmi', 'body_type')

# admin.site.register(Profile, ProfileAdmin)
admin.site.register(Profile)