import { describe, it, expect } from "vitest";
import { RbacService } from "../rbac";

describe("RbacService (Role-Based Access Control)", () => {
  it("should allow owners to perform all actions", () => {
    expect(RbacService.can("owner", "patient:read")).toBe(true);
    expect(RbacService.can("owner", "patient:delete")).toBe(true);
    expect(RbacService.can("owner", "billing:write")).toBe(true);
    expect(RbacService.can("owner", "audit:read")).toBe(true);
  });

  it("should restrict staff role from administrative/billing capabilities", () => {
    expect(RbacService.can("staff", "patient:read")).toBe(true);
    expect(RbacService.can("staff", "patient:delete")).toBe(false);
    expect(RbacService.can("staff", "billing:write")).toBe(false);
    expect(RbacService.can("staff", "audit:read")).toBe(false);
  });

  it("should allow manager to read billing but not delete patients", () => {
    expect(RbacService.can("manager", "billing:read")).toBe(true);
    expect(RbacService.can("manager", "patient:delete")).toBe(false);
  });

  it("should throw error when check fails", () => {
    expect(() => RbacService.check("staff", "patient:delete")).toThrow(
      "Forbidden: Role 'staff' lacks the required 'patient:delete' permission."
    );
    expect(() => RbacService.check("owner", "patient:delete")).not.toThrow();
  });
});
