package com.aaishika.moodwiz

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView.loadUrl("https://moodwiz.z22.web.core.windows.net/")

    }
}