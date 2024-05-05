package com.cropigo_ml


import android.graphics.Bitmap
import android.net.Uri
import android.provider.MediaStore
import android.util.Log
import com.cropigo_ml.ml.TfLiteModel
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import org.tensorflow.lite.DataType
import org.tensorflow.lite.support.common.ops.NormalizeOp
import org.tensorflow.lite.support.image.ImageProcessor
import org.tensorflow.lite.support.image.TensorImage
import org.tensorflow.lite.support.image.ops.ResizeOp
import org.tensorflow.lite.support.tensorbuffer.TensorBuffer

class CropRecommendModule(reactContext: ReactApplicationContext?) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "CropRecommendModule"
    }

    @ReactMethod
    fun classifyImage(uri1: String,promise: Promise) {
        try {
          var bitmap:Bitmap = MediaStore.Images.Media.getBitmap(reactApplicationContext.contentResolver, Uri.parse(uri1))
            // Load model

            val model = TfLiteModel.newInstance(reactApplicationContext)

            // Image processing
            val imageProcessor = ImageProcessor.Builder()
                .add(NormalizeOp(0.0f, 255.0f))
                .add(ResizeOp(256, 256, ResizeOp.ResizeMethod.NEAREST_NEIGHBOR))
                .build()
            val tensorImage = TensorImage(DataType.FLOAT32)
            tensorImage.load(bitmap)
            val processedImage = imageProcessor.process(tensorImage)
//
//            // Prepare input tensor buffer
            val inputFeature0 = TensorBuffer.createFixedSize(intArrayOf(1, 256, 256, 3), DataType.FLOAT32)
            inputFeature0.loadBuffer(processedImage.buffer)

            // Perform model inference
            val outputs = model.process(inputFeature0)
            val outputFeature0 = outputs.outputFeature0AsTensorBuffer.floatArray
//
//            // Determine the predicted class
            val maxIdx = outputFeature0.indices.maxByOrNull { outputFeature0[it] } ?: -1


//            // Pass result to callback
//            // Release resources
            model.close()
  //          promise.resolve(maxIdx)   
      val resultJson = "{\"id\": ${outputFeature0[maxIdx]}, \"maxIdx\": $maxIdx}"
      promise.resolve(resultJson)
        } catch (e: Exception) {
            // Handle errors

            promise.reject("Error: ${e.message}")
        }
    }
}
