package com.pushinfo

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class PushInfoModule(private val reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun getConstants(): MutableMap<String, Any> =
    hashMapOf("applicationId" to reactContext.packageName)

  companion object {
    const val NAME = "PushInfo"
  }
}
