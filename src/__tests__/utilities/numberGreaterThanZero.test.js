import { numberGreaterThanZero } from "../../Proptypes/greaterThanZero";

test('should return null for valid prop', () => {
    const val = numberGreaterThanZero({temp:2},"temp","tempComponent")
    expect(val).toBe(null)
})

