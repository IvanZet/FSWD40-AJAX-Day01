$("#submit").click(function(){                             // when submit button is clicked
    $.post( $("#searchForm").attr("action"),                //fetch the URL from searchForm
            $("#searchForm :input").serializeArray(),       // serialize the data from the input fields, creating an array of objects (name and value pairs)
            function(info){$("#msg").html(info);    //append the response to element with id of message
            });
            clearInput();
            $("#searchForm").submit(function(){
                return false;                           //do not redirect after submit is clicked
            });
            function clearInput(){                      //clear all input fields from #searchForm
                $("input :name").each( function(){
                    $(this).val('');
                });

            }
})


$("#inputBtn").click(function(){                            // when submit button is clicked
    $.post( $("#inputForm").attr("action"),                //fetch the URL from inputForm
            $("#inputForm :input").serializeArray(),       // serialize the data from the input fields, creating an array of objects (name and value pairs)
            function(info){$("#output").html(info);       //append the response to element with id of message
            });
            clearInput();
            $("#inputForm").submit(function(){
                return false;                            //do not redirect after submit is clicked
            });
            function clearInput(){                      //clear all input fields from #inputForm
                $("input :name").each( function(){
                    $(this).val('');
                });

            }
})