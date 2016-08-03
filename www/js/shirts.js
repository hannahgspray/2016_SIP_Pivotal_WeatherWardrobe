var folder = "images/";

$.ajax({
	url: folder,
	success: function (data) {
		$(data).find("a".attr("href", function (i, val) {
			$("body").append("<img src=" + folder + val + "'>");
		}
	});
	}
});