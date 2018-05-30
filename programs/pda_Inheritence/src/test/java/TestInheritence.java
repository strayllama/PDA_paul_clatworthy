import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class TestInheritence {

    private Dog aDog;

    @Before
    public void before() {
        aDog = new Dog("Woof", 4);
    }

    @Test
    public void testDogHasHasNoise() {
        assertEquals("I make Woof as my noise", aDog.getNoise());
    }

    @Test
    public void testDogHasLegs() {
        assertEquals(4, aDog.getNumberOfLegsLeft());
    }

    @Test
    public void testNumberOfDogLimbs() {
        assertEquals(6, aDog.getNumberOfLimbs());
    }

}
