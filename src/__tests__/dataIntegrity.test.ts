import { describe, it, expect } from 'vitest';
import data from '../../public/data.json';

describe('data.json integrity', () => {
  it('has all required top-level sections', () => {
    expect(data).toHaveProperty('main');
    expect(data).toHaveProperty('resume');
    expect(data).toHaveProperty('portfolio');
    expect(data).toHaveProperty('secret');
  });

  it('main section has required fields', () => {
    expect(data.main).toHaveProperty('name');
    expect(data.main).toHaveProperty('occupation');
    expect(data.main).toHaveProperty('description');
    expect(data.main).toHaveProperty('image');
    expect(data.main).toHaveProperty('bio');
    expect(data.main).toHaveProperty('address');
    expect(data.main.address).toHaveProperty('city');
    expect(data.main).toHaveProperty('social');
    expect(data.main.social.length).toBeGreaterThan(0);
  });

  it('each social entry has name, url, and className', () => {
    data.main.social.forEach((s: any) => {
      expect(s).toHaveProperty('name');
      expect(s).toHaveProperty('url');
      expect(s).toHaveProperty('className');
    });
  });

  it('resume section has work and education arrays', () => {
    expect(Array.isArray(data.resume.work)).toBe(true);
    expect(Array.isArray(data.resume.education)).toBe(true);
    expect(data.resume.work.length).toBeGreaterThan(0);
    expect(data.resume.education.length).toBeGreaterThan(0);
  });

  it('resume has a download link', () => {
    expect(data.resume.download).toBeTruthy();
  });

  it('each work entry has required fields', () => {
    data.resume.work.forEach((w: any) => {
      expect(w).toHaveProperty('company');
      expect(w).toHaveProperty('title');
      expect(w).toHaveProperty('years');
      expect(w).toHaveProperty('description');
    });
  });

  it('each education entry has required fields', () => {
    data.resume.education.forEach((e: any) => {
      expect(e).toHaveProperty('school');
      expect(e).toHaveProperty('degree');
      expect(e).toHaveProperty('graduated');
      expect(e).toHaveProperty('description');
    });
  });

  it('portfolio has projects array with required fields', () => {
    expect(Array.isArray(data.portfolio.projects)).toBe(true);
    expect(data.portfolio.projects.length).toBeGreaterThan(0);
    data.portfolio.projects.forEach((p: any) => {
      expect(p).toHaveProperty('title');
      expect(p).toHaveProperty('category');
      expect(p).toHaveProperty('image');
    });
  });

  it('secret section has title and image', () => {
    expect(data.secret).toHaveProperty('title');
    expect(data.secret).toHaveProperty('image');
  });
});
