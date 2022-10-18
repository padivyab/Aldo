package com.aldo.practice.pages;

import com.aldo.practice.utility.Utility;
import gherkin.lexer.Th;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//ul[@class='c-navigation--primary__list']/li")
    List<WebElement> navigation;

    public void clickonMenu(String page) throws InterruptedException {
        for (WebElement list : navigation)
        {
            if (list.getText().equalsIgnoreCase(page))
            {
                Thread.sleep(2000);
                list.click();
                break;

            }
        }
    }


}
