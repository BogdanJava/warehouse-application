jQuery(function () {
    $("#navbarSupportedContent .nav-link").each(function (index, element) {
        let href = $(element).attr("href");
        let result = window.location.href.search(href);
        if (result !== -1) {
            $(element).addClass("nav-item_selected");
        }
    })
});

function getResource(url, successCallback, errorCallback) {
    let successCallbackWrapper = function (data, status) {
        if (status === 'success') {
            successCallback(data);
        }
    };
    let errorCallbackWrapper = function (jqXHR, status, error) {
        if (errorCallback != null) {
            errorCallback(status, error);
        }
    };
    let settings = {
        url: url,
        contentType: "application/json",
        dataType: "json",
        success: successCallbackWrapper,
        error: errorCallbackWrapper,
        method: "GET"
    };
    $.ajax(settings)
}