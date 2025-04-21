import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient("https://zhhsszbhxeydhkveektl.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoaHNzemJoeGV5ZGhrdmVla3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNDkxMDQsImV4cCI6MjA2MDgyNTEwNH0.jbIbjLZzmvRaSZbSZFg__tSrnfsQEcN4PL9CuCOR-7g");

window.submitFeedback = async function (e) {
  e.preventDefault();
  const form = e.target;
  const { name, email, message } = Object.fromEntries(new FormData(form));

  const { error } = await supabase.from("feedback").insert([{ name, email, message }]);
  if (error) {
    alert("Error submitting feedback");
  } else {
    alert("Thank you for your feedback!");
    form.reset();
  }
};
