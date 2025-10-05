# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# === Prevent removal of Java Beans annotations used by Jackson ===
-keepclassmembers class * {
    @java.beans.ConstructorProperties *;
    @java.beans.Transient *;
}

-keepattributes *Annotation*
-keep class com.fasterxml.** { *; }
-dontwarn com.fasterxml.**

# === Prevent removal of classes used by JWT (io.jsonwebtoken) ===
-keep class io.jsonwebtoken.** { *; }
-dontwarn io.jsonwebtoken.**

# === Prevent removal of DatatypeConverter (XML bindings) ===
-dontwarn javax.xml.bind.**
-keep class javax.xml.bind.** { *; }

# === General safe rules ===
-dontwarn java.beans.**
-keep class java.beans.** { *; }
