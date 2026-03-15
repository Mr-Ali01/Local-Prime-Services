$(document).ready(function () {
        // Proposal Submission
        $("#submit-proposal").on("click", function () {
          swal(
            {
              title: "Confirm Proposal",
              text: "You are about to submit your verified credentials for this Luxury Landscaping Architect role. Proceed?",
              type: "info",
              showCancelButton: true,
              confirmButtonColor: "#0F172A",
              confirmButtonText: "Submit Now",
              closeOnConfirm: false,
            },
            function () {
              swal({
                title: "Proposal Sent!",
                text: "Your professional profile has been shared with Verde Living Estates. You will be notified of shortlisting via messenger.",
                type: "success",
                confirmButtonColor: "#0F172A",
              });
            }
          );
        });

        // Save Job Interaction
        $("#save-job").on("click", function () {
          const $icon = $(this).find("i");
          if ($icon.hasClass("fa-heart-o")) {
            $icon
              .removeClass("fa-heart-o")
              .addClass("fa-heart")
              .css("color", "#EF4444");
            swal({
              title: "Job Saved",
              text: "Added to your shortlisted opportunities.",
              timer: 1200,
              showConfirmButton: false,
            });
          } else {
            $icon
              .removeClass("fa-heart")
              .addClass("fa-heart-o")
              .css("color", "");
            swal({
              title: "Removed",
              text: "Opportunity removed from your list.",
              timer: 1200,
              showConfirmButton: false,
            });
          }
        });
      });