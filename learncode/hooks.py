# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "learncode"
app_title = "LearnCode"
app_publisher = "Gloria"
app_description = "Learn to code"
app_icon = "LC"
app_color = "grey"
app_email = "adaugo.okafor@manqala.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/learncode/css/learncode.css"
# app_include_js = "/assets/learncode/js/learncode.js"

# include js, css files in header of web template
# web_include_css = "/assets/learncode/css/learncode.css"
# web_include_js = "/assets/learncode/js/learncode.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "learncode.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "learncode.install.before_install"
# after_install = "learncode.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "learncode.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"learncode.tasks.all"
# 	],
# 	"daily": [
# 		"learncode.tasks.daily"
# 	],
# 	"hourly": [
# 		"learncode.tasks.hourly"
# 	],
# 	"weekly": [
# 		"learncode.tasks.weekly"
# 	]
# 	"monthly": [
# 		"learncode.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "learncode.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "learncode.event.get_events"
# }

