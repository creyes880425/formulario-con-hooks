//1.Buscar la el último registro para esa sesión en ELK                                        
                                        var dialogs = DebugCollector.Instance.GetHistoric(tenant, criteria, criteriaValue, "Dialog", DateTime.Now.AddHours(-23), DateTime.Now);

                                        var providerStr = "NEXMO";
                                        var configurationName = "WHATSAPP_MOVIL";
                                        switch (provider)
                                        {
                                            case 1 :
                                                providerStr = "NEXMO";
                                                configurationName = "WHATSAPP_MOVIL";
                                                break;
                                            case 2:
                                                providerStr = "ONEMARKETER";
                                                configurationName = "OM_WHATSAPP_API_NUMBER";
                                                break;
                                            case 3:
                                                providerStr = "TWILIO";
                                                configurationName = "TW_WHATSAPP_API_NUMBER";
                                                break;                                            
                                            case 5:                                       
                                                providerStr = "INFOBIP";
                                                configurationName = "IB_WHATSAPP_API_NUMBER";
                                                break;
                                            case 6:
                                                providerStr = "GUPSHUP";
                                                configurationName = "GS_WHATSAPP_API_NUMBER";
                                                break;
                                            default:
                                                providerStr = "NEXMO";
                                                configurationName = "WHATSAPP_MOVIL";
                                                break;
                                        }

                                        if (dialogs.Any())
                                        {
                                            var from = ConfigurationManager.GetChannelConfiguration(tenant, configurationName, channelId, providerStr, service).ConfigurationValue.ToString();
                                            var additionalInfo = new Dictionary<string, string>
                                            {
                                                { "namespace", "" },
                                                { "template", "LynnDirectMessage" },
                                                { "locale", "es" },
                                                { "type", "MTM" },
                                                { "from", from },
                                            };

                                            var campaignData = new Dictionary<string, Dictionary<string, string>>();
                                            var addData = new Dictionary<string, string>
                                            {
                                                //{ "sessionId", sessionId.ToString() },
                                                { "MessageType", "ChatAsync" },
                                            };

                                            var mediaList = string.Empty;
                                            if (message.Content != null && message.Content.Any())
                                            {
                                                foreach (var c in message.Content)
                                                {
                                                    if (c.Attachment != null)
                                                    {
                                                        mediaList = mediaList + c.Attachment.Mime.Split("/")[0] + "|" + c.Attachment.Url + ",";
                                                    }
                                                }
                                            }
                                            if (!string.IsNullOrEmpty(mediaList))
                                            {
                                                addData.Add("MediaMessage", mediaList);
                                            }

                                            var whatsAppData = new Dictionary<string, string>
                                            {
                                                { "1",  message.Text }
                                            };
                                            
                                            campaignData.Add(channelId.ToString(), addData);
                                            campaignData.Add("WhatsAppData", whatsAppData);

                                            var userData = new ConcurrentDictionary<string, string>();
                                            //3.Si está en la ventana de las 24 horas:
                                            //a.Enviar un mensaje directo al cliente
                                            //i.Implementar campañas múltiples para este caso de uso
                                            if (!string.IsNullOrEmpty(message.Text) || !string.IsNullOrEmpty(mediaList))
                                            {
                                                var recordId = MultichannelSession.GenerateOutboundRecord(tenant, channelId, campaignId, contactId, true, additionalInfo, campaignData, userData, new Guid(), string.Empty, false, false, timezone, Guid.Empty, out string operation);
                                            }                                            
                                        }
                                        else
                                        {
                                            //2.Si no está dentro de la ventana de 24 horas, se descarta el mensaje
                                            //a.Guardar mensaje pendiente para mostrarlo cuando se inicie una nueva sesión. (debe quedar guardado asociado a un criterio)
                                        }