package git1;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class git1step {
	@Given("I enter 50 in calc")
	public void I_enter_50_in_calc() {
		System.out.println("I enter 50 in calc");
	}
	@And("I press add")
	public void I_press_add() {
		System.out.println("I press add");
	}
	@Then("I have entered 50 in calc")
	public void I_have_entered_50_in_calc1() {
		System.out.println("I enter 50 in calc");
	}
	@And("Press add")
	public void press_add() {
		System.out.println("Press add");
	}
	@Then("calc shows 100 in calc")
	public void calc_shows_100_in_calc() {
		System.out.println("calc shows 100");
	}


}
