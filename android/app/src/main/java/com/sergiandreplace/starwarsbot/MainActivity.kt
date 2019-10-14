package com.sergiandreplace.starwarsbot

import ai.api.AIConfiguration.SupportedLanguages
import ai.api.AIDataService
import ai.api.android.AIConfiguration
import ai.api.model.AIRequest
import ai.api.model.AIResponse
import android.os.Bundle
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.activity_main.*
import org.jetbrains.anko.doAsync
import org.jetbrains.anko.onComplete


class MainActivity : AppCompatActivity() {

    private val config = AIConfiguration(
        "CLIENT-TOKEN",
        SupportedLanguages.English,
        AIConfiguration.RecognitionEngine.System
    )
    private val messagesAdapter: MessagesAdapter = MessagesAdapter()
    private val aiData: AIDataService by lazy {
        AIDataService(config)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        conversation.adapter = messagesAdapter
        conversation.layoutManager = LinearLayoutManager(this)

        send.setOnClickListener {
            sendText(userInput.text.toString())
        }


    }

    private fun sendText(text: String) {
        userInput.text = null
        userInput.requestFocus()
        messagesAdapter.messages += text
        send.isEnabled = false
        doAsync {
            val response = aiData.request(AIRequest(text))
            onComplete {
                if (response != null) {
                    onResult(response)
                }
            }
        }
    }

    private fun onResult(result: AIResponse?) {
        send.isEnabled = true
        result?.let {
            messagesAdapter.messages += it.result.fulfillment.speech
        }
    }

}

class MessagesAdapter : RecyclerView.Adapter<RecyclerView.ViewHolder>() {
    var messages: List<String> = emptyList()
        set(value) {
            field = value
            notifyDataSetChanged()
        }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        return MessageViewHolder(TextView(parent.context).apply {
            textSize = 20f
        })
    }

    override fun getItemCount() = messages.size

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        (holder.itemView as TextView).text = messages[position]
    }


    class MessageViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView)
}