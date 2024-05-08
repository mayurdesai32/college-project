package com.cropigo_ml


import android.graphics.Bitmap
import android.net.Uri
import android.provider.MediaStore
import android.util.Log
import com.cropigo_ml.ml.ConvertedModel

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
import java.nio.ByteBuffer
import java.nio.ByteOrder

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

            val model = ConvertedModel.newInstance(reactApplicationContext)

//            // Image processing
//            val imageProcessor = ImageProcessor.Builder()
//                .add(NormalizeOp(0.0f,  255.0f))
//                .add(ResizeOp(224, 224, ResizeOp.ResizeMethod.NEAREST_NEIGHBOR))
//                .build()
//            val tensorImage = TensorImage(DataType.FLOAT32)
//            tensorImage.load(bitmap)
//            val processedImage = imageProcessor.process(tensorImage)
//            // Prepare input tensor buffer
//            val inputFeature0 = TensorBuffer.createFixedSize(intArrayOf(1, 224, 224, 3), DataType.FLOAT32)
//
//            inputFeature0.loadBuffer(processedImage.buffer)



//            val processedImage = imageProcessor.process(tensorImage)


//
//            // Prepare input tensor buffer
//            val inputFeature0 = TensorBuffer.createFixedSize(intArrayOf(1, 224, 224, 3), DataType.FLOAT32)
//            val byteBuffer:ByteBuffer= ByteBuffer.allocateDirect(4*224*224*3)


            val imageSize = 224
            val inputFeature0 = TensorBuffer.createFixedSize(intArrayOf(1, imageSize, imageSize, 3), DataType.FLOAT32)
            val byteBuffer = ByteBuffer.allocateDirect(4 * imageSize * imageSize * 3)
            byteBuffer.order(ByteOrder.nativeOrder())

            val intValues = IntArray(imageSize * imageSize)
            bitmap.getPixels(intValues, 0, imageSize, 0, 0, imageSize, imageSize)
            var pixel = 0
            for (i in 0 until imageSize) {
                for (j in 0 until imageSize) {
                    val `val` = intValues[pixel++]
                    byteBuffer.putFloat(((`val` shr 16) and 0xFF).toFloat() * (1f / 255))
                    byteBuffer.putFloat(((`val` shr 8) and 0xFF).toFloat() * (1f / 255))
                    byteBuffer.putFloat((`val` and 0xFF).toFloat() * (1f / 255))
                }
            }









            inputFeature0.loadBuffer(byteBuffer)




            // Perform model inference
            val outputs = model.process(inputFeature0)
                   
            val outputFeature0 = outputs.outputFeature0AsTensorBuffer.floatArray
//    promise.resolve("${outputFeature0[0]}")
////            // Determine the predicted class
            val maxIdx = outputFeature0.indices.maxByOrNull { outputFeature0[it] } ?: -1

            Log.d( "success","classifyImage:$maxIdx ,${outputFeature0[maxIdx]},${outputFeature0[0]}")

//            // Pass result to callback
//            // Release resources
            model.close()
//            promise.resolve(outputFeature0)
//            promise.resolve("${outputFeature0[maxIdx]}")
//                promise.resolve("${maxIdx}")
      val resultJson = "{\"id\": ${outputFeature0[maxIdx]}, \"maxIdx\":$maxIdx}"

      promise.resolve(resultJson)
        } catch (e: Exception) {
            // Handle errors

            promise.reject("Error: ${e.message}")
        }
    }
}
